import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

// Lazily create the pool so the module can be imported during the build
// (Next.js collects page data for API routes at build time) even when no
// DATABASE_URL is configured. The pool is only actually connected when an
// API route calls getDb() at runtime.
function getPool(): Pool | null {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  if (!globalForDb.__arenaNextJsPostgresqlPool) {
    globalForDb.__arenaNextJsPostgresqlPool = new Pool({
      connectionString: databaseUrl,
    });
  }
  return globalForDb.__arenaNextJsPostgresqlPool;
}

export function getDb(): NodePgDatabase<Record<string, never>> | null {
  const pool = getPool();
  if (!pool) return null;
  return drizzle(pool);
}

// Backwards-compatible convenience export. At build time this is null-safe:
// it only throws lazily if a caller actually uses the database.
export const db = new Proxy(
  {},
  {
    get(_target, prop) {
      const connection = getDb();
      if (!connection) {
        throw new Error(
          "DATABASE_URL is required to use the database. The site build does not require it — only the /api routes do."
        );
      }
      const value = (connection as unknown as Record<PropertyKey, unknown>)[
        prop
      ];
      return typeof value === "function" ? value.bind(connection) : value;
    },
  }
) as unknown as NonNullable<ReturnType<typeof getDb>>;
