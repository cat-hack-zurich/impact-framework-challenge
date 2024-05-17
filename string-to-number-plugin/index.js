const StringToNumberPlugin = (globalConfig) => {

    const metadata = {
        kind: 'execute',
    };

    const execute = async (inputs, config) => {
        const fromParameter = config['from-parameter'];
        return inputs.map(input => {
            let outputValue = input[fromParameter];

            return { 
                ...input,
                [fromParameter]: Number(outputValue)
            };
        });
    };

    return {
        metadata,
        execute,
    };
};

exports.StringToNumberPlugin = StringToNumberPlugin;