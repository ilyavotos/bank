import type { SigninSchema } from "../schemas";
import { fetchApi } from "@lib/fetch-api";

export const authUser = (body: SigninSchema) => fetchApi<SigninSchema>("/auth", "POST", body);
export const authCheck = () => fetchApi<SigninSchema>("/user");
