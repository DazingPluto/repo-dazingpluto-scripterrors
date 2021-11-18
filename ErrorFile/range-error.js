function check(n)
{
    if( !(n >= -500 && n <= 500) )
    {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

try
{
    check(2000)
}
catch(error)
{
    if (error instanceof RangeError)
    {
    // Handle the error
    }
}


function checkValue(value)
{
    if(["apple", "banana", "carrot"].includes(value) === false)
    {
        throw new RangeError('The argument must be an "apple", "banana", or "carrot".')
    }
}



module.exports={
    check,
    checkValue
}


