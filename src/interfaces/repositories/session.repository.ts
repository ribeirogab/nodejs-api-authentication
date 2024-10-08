import type { Session } from '../models/session';

export interface SessionRepository {
  upsert(session: Session): Promise<Session>;

  deleteByUserId({ user_id }: { user_id: string }): Promise<void>;

  findByUserId({ user_id }: { user_id: string }): Promise<Session | null>;
}
