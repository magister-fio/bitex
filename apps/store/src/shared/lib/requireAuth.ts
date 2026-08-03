import { getServerSession } from "next-auth";

import { authOptions } from "./authOptions";

export const isAdmin = async (): Promise<boolean> => {
  const session = await getServerSession(authOptions);
  return !!session;
};
