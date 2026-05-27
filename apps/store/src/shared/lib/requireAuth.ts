import { getServerSession } from "next-auth";

import { authOptions } from "./authOptions";

export const requireAdmin = async (): Promise<{ error: string } | null> => {
  const session = await getServerSession(authOptions);
  if (!session) return { error: "Unauthorized" };
  return null;
};
