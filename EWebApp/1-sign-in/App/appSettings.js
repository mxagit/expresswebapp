const appSettings = {
    appCredentials: {
        clientId: "5aceb6f5-7075-432e-9430-ea55939bdab5",
        tenantId: "ce124873-5138-4888-b661-2df013088af2",
        clientSecret: "JSo7Q~ArWTCv.UWYZaeJI.MUWVl_4JIM0r0L."
    },
    authRoutes: {
        redirect: "/redirect",
        error: "/error", // the wrapper will redirect to this route in case of any error.
        unauthorized: "/unauthorized" // the wrapper will redirect to this route in case of unauthorized access attempt.
    }
}

module.exports = appSettings;