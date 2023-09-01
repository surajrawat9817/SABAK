
// api.js
const API_BASE_URL = 'http://your-api-url';
// export default async (e) => {
    
//     await fetch("https://localhost:7185/api/Login/LoginToAccount?userName=" + e.username + "&password=" + e.password, {
//            method: 'GET',
//            headers: {
//                'Content-Type': 'application/json',
//                "Access-Control-Allow-Origin" :'http://localhost:7185'

//            }
//    });
//    return response.text();
// };

export const loginUser = async (e) => {
    try {
        const response = await fetch(`https://localhost:7185/api/Login/LoginToAccount?userName=${e.username}&password=${e.password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                // Remove this line, CORS headers should be configured on the server
                // "Access-Control-Allow-Origin": 'http://localhost:7185'
            }
        });

        if(response.status ==400)
        {
            throw new Error("Incorrect username or password");
        }
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error so that it can be handled further up the call stack if needed.
    }
    return null;
};


export const  userDetails = async (e) => {
    
    const response = await fetch("https://localhost:7185/api/Customer/getCustomerInfoById?userId="+e, {
        headers: {
         'Content-Type': 'application/json',

          Accept: "*"
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: in getCustomerInfo ${response.status}`);
    }

   var jsonResponse =await response.json();
   return JSON.stringify(jsonResponse)

};


export const signupUser = async (e) => {

    const requestBody = {
        id :"",
        userId :"",
        firstName: e.FirstName,
        lastName: e.LastName,
        userName: e.UserName,
        dob: e.Dob,
        email: e.EmailAddress,
        phoneNumber:e.PhoneNumber,
        totalBalance: 0,
        addharCardNumber: e.AddharCardNumber,
        panCardNumber: e.PanCardNumber,
        password: e.Password
    };

    const response = await fetch('https://localhost:7185/api/SignUp/createNewAccount', {
                method: 'POST',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
    return response.json();
};

export const fetchDashboardData = async (token) => {
    const response = await fetch(`${API_BASE_URL}/dashboard`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.json();
};
