const authRequired = (router, user) => {
    if (user === null || user.user.tipo !== 'Administrador') {
        console.log("Redirecting...")
        return router.push('/');
    };
};

export default authRequired;