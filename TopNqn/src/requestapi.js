import axios from 'axios';


function Request() {
    const handleApiRequest = async () => {
        try {
            const response = await axios.post('http://20.244.56.144/test/register', {
                "companyName":"Afford",
                "ownerName":"Sathish Kumar V",
                "rolNo":"20MIS1080",
                "ownerEmail":"sathishkumar.v2020@vitstudent.ac.in",
                "accessCode":"Avvsyl"
            });

            // Handle the response
            console.log(response.data);
        } catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <button onClick={handleApiRequest}>Make API Request</button>
        </div>
    );
}

export default Request;
