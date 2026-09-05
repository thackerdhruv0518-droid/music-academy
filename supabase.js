const SUPABASE_URL =
    "https://ehchhgqjohsdkxmouozm.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_41E2ivZKj4l5YfIpoCzwHA_MjyQAHfq";

const supabaseClient =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );