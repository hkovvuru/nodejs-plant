const shutdown = (shutdownConfig) => {
    const { signals, shutdownServices } = shutdownConfig;
    signals.forEach((signal) => {
        process.on(signal, shutdownServices);
    });
};

export default shutdown;