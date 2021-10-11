const appSettings = {
    appCredentials: {
        clientId: "ADD HERE",
        tenantId: "ADD HERE",
        clientSecret: "ADD HERE"
    },
    authRoutes: {
        redirect: "/redirect",
        error: "/error", // the wrapper will redirect to this route in case of any error.
        unauthorized: "/unauthorized" // the wrapper will redirect to this route in case of unauthorized access attempt.
    }
}

module.exports = appSettings;
