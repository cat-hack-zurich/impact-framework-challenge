const RenameParameterPlugin = (globalConfig) => {

    const metadata = {
        kind: 'execute',
    };

    const execute = async (inputs, config) => {
        const fromParameter = config['from-parameter'];
        const toParameter = config['to-parameter'];
        const keepExisting = globalConfig['keep-existing'];
        return inputs.map(input => {
            let outputValue = input[fromParameter];

            if (input[fromParameter] && !keepExisting) {
                delete input[fromParameter];
            }

            return { 
                ...input,
                [toParameter]: outputValue
            };
        });
    };

    return {
        metadata,
        execute,
    };
};

exports.RenameParameterPlugin = RenameParameterPlugin;