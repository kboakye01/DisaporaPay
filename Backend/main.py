import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "DiasporaPay API is running"}


@app.get("/rates")
def get_live_rates():
    url = "https://open.er-api.com/v6/latest/USD"
    response = requests.get(url)
    data = response.json()

    return {
        "USD_GHS": data["rates"]["GHS"],
        "USD_NGN": data["rates"]["NGN"],
        "USD_KES": data["rates"]["KES"],
        "USD_ZAR": data["rates"]["ZAR"]
    }


@app.get("/predict")
def predict_rate(currency: str = "GHS"):
    return {
        "currency": currency,
        "days": 3,
        "prediction": f"USD to {currency} may increase slightly in the next 3 days.",
        "recommendation": "Consider waiting 24–48 hours before sending money.",
        "confidence": 90,
        "note": "Demo AI prediction. Not financial advice."
    }


@app.get("/ai-advice")
def ai_advice():
    return {
        "recommendation": "AI predicts the Ghana cedi may weaken soon. Consider sending within 24 hours."
    }


@app.post("/send-money")
def send_money(amount: float, country: str):
    return {
        "status": "success",
        "amount_sent": amount,
        "destination": country,
        "message": f"${amount} transfer to {country} initiated"
    }