export interface ProfileModel {
    name: string;
    sub: string | null;
    jti: string | null;
    useage: string | null;
    at_hash: string | null;
    nbf: number | null;
    exp: number | null;
    iat: number | null;
    iss: string | null;

    unique_name: string | null;
    email_confirmed: boolean;
    role: string[];
    permission?: string[];
}
