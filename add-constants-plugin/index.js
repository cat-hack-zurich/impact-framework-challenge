const AddConstantsPlugin = (globalConfig) => {

    const metadata = {
        kind: 'execute',
    };

    const execute = async (inputs, config) => {
        return inputs.map(input => {
            const toAdd = {}
            config.forEach(element => {
                toAdd[element.key] = element.value
            }); 

            return { 
                ...input,
                ...toAdd
            };
        });
    };

    return {
        metadata,
        execute,
    };
};

exports.AddConstantsPlugin = AddConstantsPlugin;