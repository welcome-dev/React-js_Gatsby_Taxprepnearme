import axios from "axios"

const tax_api_url =
  "https://bd56w5ceff.execute-api.us-east-1.amazonaws.com/prod/taxprepnearme"
const contact_url = "https://lc7rjdkgbf.execute-api.us-east-1.amazonaws.com/prod/postcontact"

class Service {
  getTaxData(params, handleHttpResponse) {
    axios
      .get(
        tax_api_url + "?state=" + params.stateCode + "&city=" + params.cityName,
        {}
      )
      .then(res => handleHttpResponse(res.data))
      .catch(err => console.log(err))
  }
  postContact(params, handleHttpResponse) {
    axios
      .post(
        contact_url,
        {params},
        {
          headers: {
            "access_token": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5ETkZNVEE1T0VJM09FUXhRamxDTmpRd01ESkJRMFF6T1RaR1JrUXpNa05DTmpBeFJEQTBNZyJ9.eyJpc3MiOiJodHRwczovL2Rldi1reDd6bmR1dS5hdXRoMC5jb20vIiwic3ViIjoiMm50RGZRNFo1Z3JiWW5ZdEVJTHI3QlVhMlRqRXpMN1ZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbGM3cmpka2diZi5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9wcm9kL3Bvc3Rjb250YWN0LyIsImlhdCI6MTU2MDI2NDg2MywiZXhwIjoxNTYwMzUxMjYzLCJhenAiOiIybnREZlE0WjVncmJZbll0RUlMcjdCVWEyVGpFekw3ViIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.dgRjXxFyLyLebt8Ct0MjhYdxvplsvs0D62trtW7xFUprmAnb0p-BFO8pLw7v_6psPi1NyaMqNAxnZ6vXqls92gGc8-sn4YwIN19tDomeU8157NrpVvqXG7tdCtnyX3ikm2Ynkj0F67AZMGfTcEaO2jdrz3TSvvpiw4i9buTwialx_pYky-Qv6q7k4RopoUlBdRKX_DO2bO_9ciXVA3oflh6ZeahqjGUJqkqg7vQ0BdusxFC2IGsb1FEvIGNuFOvHLzzyT8T1VQtOPAUHaDEep0n_k5jh3YpqbxLMvl8x77yrm_Sqq_bTBzxE0YEo8j5BGM_u70DfoeGC17-9xxrWfg",
            "token_type": "Bearer"
          }
        })
      .then(res => handleHttpResponse(res.data))
      .catch(err => console.log(err))
  }
}

export default Service
