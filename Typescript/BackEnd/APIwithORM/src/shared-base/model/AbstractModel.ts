interface IValidationErrors{
    property: string;
    constraints: string[];
}

export class AbstractValidator{
    /**
     * Recursive function extract nested validation
     * @param validated
     * @returns
     */
    private extractConstraints(validated: any): any{
        const errors: IValidationErrors[] = [];
        // Get property that had the validations error
        for (const error of validated){
            const constraints: string[] = [];

            if(error?.constrains){
                // Extract the constrains that triggers the error
                for(const key in error.constrains) {
                    constraints.push(error.constrains[key]);
                }

                errors.push({
                    property: error.property
                })
            }
        }

    }
}