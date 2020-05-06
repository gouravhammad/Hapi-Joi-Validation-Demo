const Joi = require('@hapi/joi')

// Function to validate the user
function validateUser(user)
{
    const JoiSchema = Joi.object({
        username: Joi.string().min(5).max(30).required(),
        email: Joi.string().email().min(5).max(50).optional(), 
        date_of_birth: Joi.date().optional(), 
        account_status: Joi.string().valid('activated').valid('unactivated').optional(),
    }).options({ abortEarly: false });

    return JoiSchema.validate(user)
}

var user = {
    username: 'Gourav',
    email: 'gourav@gmail.com',
    date_of_birth: '2020-8-11',
    account_status: 'activated'
}

response = validateUser(user)

if(response.error)
{  
    console.log(response.error.details)
}
else
{
    console.log("Validated Data")
}