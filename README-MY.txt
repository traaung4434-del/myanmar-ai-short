Myanmar AI Shorts Studio — Vercel + Replicate

ဒီ project က browser canvas animation မဟုတ်ဘဲ AI video generation API ကို ခေါ်သုံးတဲ့ website starter ဖြစ်ပါတယ်။ AI video ထုတ်ရန် Replicate account/token နှင့် အသုံးပြုနိုင်သော credits လိုအပ်နိုင်သည်။

GitHub/Vercel တင်နည်း (ဖုန်းနဲ့)
1. ZIP ကို ဖြည်ပါ။
2. GitHub repository ထဲမှာ index.html နဲ့ api folder ကို upload လုပ်ပါ။ api folder အတွင်း generate.js နဲ့ status.js ပါရမယ်။
3. Vercel project ကို GitHub repository နဲ့ ချိတ်ထားပါ။ Push/Commit လုပ်ပြီး deploy စောင့်ပါ။
4. Replicate account မှ API token ယူပါ: https://replicate.com/account/api-tokens
5. Vercel Dashboard > Project > Settings > Environment Variables
   Name: REPLICATE_API_TOKEN
   Value: (ကိုယ့် Replicate token)
   Environment: Production (လိုရင် Preview ပါရွေး)
6. Save လုပ်ပြီး Deployments > Redeploy လုပ်ပါ။
7. Website ကို ဖွင့်ပြီး ခေါင်းစဉ်, ဇာเรื่อง, style, duration ဖြည့်ကာ Generate နှိပ်ပါ။

လုံခြုံရေး
- API token ကို HTML/JavaScript ထဲ မထည့်ပါနှင့်။ Vercel serverless API ကနေသာ ဖတ်ပါ။
- AI video API က အခကြေးငွေရှိနိုင်ပါတယ်။ Generate မလုပ်ခင် Replicate model pricing နဲ့ input schema ကိုစစ်ပါ။
- ဒီ starter သည် prunaai/p-video-2-pro model endpoint ကို default သုံးထားသည်။ Model ၏ input schema ပြောင်းလဲပါက api/generate.js ထဲက input fields ကို model page နဲ့ကိုက်အောင် ပြင်ရန်လိုနိုင်သည်။
- Video provider ရဲ့ output က URL ဖြစ်လို့ browser မှာဖွင့်/ဒေါင်းလုဒ်လုပ်နိုင်မှုက provider URL နှင့် browser ပေါ်မူတည်သည်။
- မြန်မာစာတန်းကို form ထဲက captions field မှာရေးနိုင်သော်လည်း ဒီ starter က caption ကို AI-generated video frame ထဲ တိုက်ရိုက်မပေါင်းသေးပါ။ အဲဒီအတွက် video rendering/FFmpeg step ထပ်လိုသည်။
