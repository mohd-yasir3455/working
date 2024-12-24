import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const RulesPage = () => {
  const [isHindi, setIsHindi] = useState(false);

  const handleToggleLanguage = () => {
    setIsHindi((prev) => !prev);
  };

  const englishRules = [
    "You will not become a member of BEES Foundation just by joining the Telegram group or by filling the registration form. A monthly contribution of Rs. 300 is required to become a member and avail benefits.",
    "You will have to deposite Rs.100 membership fee which has to be paid only once.",
    "Any adult can become a member of the Foundation.",
    "BEES Foundation is an NGO working for the promotion of education. Your contribution helps the Foundation work in the field of education and also provides assistance to the family (nominee) of a member in case of their untimely death (before 60) or severe accidents.",
    "There is no guarantee that the Foundation will always provide assistance, as it depends on member contributions. If members do not contribute or if technical issues (such as hacking) arise, the Foundation may not have sufficient funds to provide aid.",
    "Funds for a deceased member will be based on one death per 2000 members. If there are multiple deaths, the available funds will be distributed proportionally.",
    "The amount given to a deceased member's family is not fixed and may increase or decrease over time.",
    "To receive assistance, members must contribute at least twice. If a tragedy occurs after only one contribution, no assistance will be provided. Continuous contributions are required, and if contributions are not made at the time of the tragedy, no aid will be given.",
    "Members must continue contributing regularly. A one-time exemption per year is allowed with a written explanation for why the contribution is missed.",
    "Contributions must be made by the 10th of every month.",
    "A screenshot of your contribution must be submitted every month.",
    "If any fake screenshot or receipt is found, your membership will be terminated.",
    "Contribution receipts must be stored, either in hard copy or soft copy, which will need to be shown by the nominee when claiming benefits.",
    "Your contribution is a donation and will not be refunded.",
    "Members must stay connected to the Telegram group for updates on the Foundation’s activities.",
    "Membership is confirmed only after filling out the Google form and making the required contributions.",
    {
      mainText:
        "No assistance will be provided in cases of suicide or murder. In murder cases, an investigation will be conducted, and assistance may be given in some cases. Assistance will not be provided in these murder cases:",
      bullets: [
        "If the nominee kills the member.",
        "If a close relative kills the member to gain the assistance.",
        "If the member goes to kill someone and is murdered in the process.",
        "If the member is murdered due to enmity.",
        "If the member is murdered during a police case.",
      ],
    },
    "If there are multiple nominees, the Foundation will distribute the assistance as it deems appropriate.",
    "The nominee must provide ID, Aadhaar, and bank details.",
    "The Foundation does not pressure or force anyone to become a member. Members can leave the Foundation at any time by choice.",
    "The Foundation's objective is to help its members and also work in the field of education. The Foundation will save 15-20% of the contributions for educational activities, and this percentage may increase as the number of members grows.",
    "The rules of the Foundation can be amended at any time.",
  ];

  const hindiRules = [
    // Similar structure for Hindi rules with bullets in relevant points

    "सिर्फ Telegram या WhatsApp का Member बनने या Registration form भर देने से आप BEES Foundation के Member नहीं बनेंगे। हर महीने Rs.300 देने पर आप Member बनेंगे और Foundation से फायदे उठा पाएंगे।",
    "आपको Rs.100 membership फीस जमा करनी होगी जो कि सिर्फ एक बार ही देनी है।",
    "कोई भी बालिग Foundation का Member बन सकता है।",
    "BEES Foundation एक N.G.O है जो शिक्षा के सुधार और बड़ावे के लिए काम कर रही है। आपके द्वारा दिये गये योगदान से Foundation शिक्षा के क्षेत्र में काम करेगी और Members को उनकी असामयिक मृत्यु (60 से पहले) पर उनके घर वालों (Nominee / Nominees) की मदद करेगी और गंभीर एक्सीडेंट के केस में भी मदद की जाएगी।",
    "Foundation आपकी मदद करे ही करे इसकी कोई गारंटी नहीं है। क्योंकि Foundation Members के ऊपर निर्भर करती है। अगर किसी कारण Members ने योगदान नहीं दिया या कोई Technical Problem हो गई जैसे Hacking आदि तो ऐसी प्रस्तिथि में Foundation के पास आपको देने के लिए Fund नहीं होगा",
    "जो पैसा हमें मिलेगा, उसमें से मृतक को दिया जाएगा। हम 2000 Members पर एक मृत्यु के अनुमान पर काम कर रहे हैं। अगर एक से अधिक मृत्यु होती है, तो उसी हिसाब से पैसा वितरित किया जाएगा।",
    "मृतक को दी जाने वाली राशि निश्चित नहीं होगी। समय के अनुसार इसमें कमी या वृद्धि की जा सकती है।",
    "सहायता पाने के लिए दो बार योगदान देना ज़रूरी है। अगर एक बार योगदान देने के बाद दुर्घटना हो जाती है, तो सहायता नहीं मिलेगी। और लगातार योगदान देना भी ज़रूरी है। अगर आप त्रासदी (Tragedy) के समय योगदान नहीं दे रहे हैं, तो आपकी मदद नहीं की जाएगी।",
    "Member बनने के बाद आपको लगातार योगदान देते रहना है। साल में एक बार की छूट है लेकिन उसके लिए आपको योगदान ना देने का कारण लिखित में देना होगा।",
    "महीने की 10 तारीख तक आपको योगदान देना होगा।",
    "आपको हर महीने अपने योगदान का स्क्रीनशॉट भेजना होगा।",
    "यदि कोई फर्जी स्क्रीनशॉट या रसीद पाई गई तो आपकी सदस्यता समाप्त कर दी जाएगी।",
    "योगदान रसीद का रिकॉर्ड एक फाइल में या सॉफ्ट कॉपी में रखना होगा जिसको नॉमिनी को बेनिफिट लेते समय दिखाना होगा।",
    "आपका योगदान एक दान है जिसे वापस नहीं किया जाएगा।",
    "आपको हमारे Telegram group से जुड़े रहना है। Foundation अपनी Activities के बारे में Update करती रहेगी।",
    "फॉर्म भरने और बताए गए योगदान देने के बाद ही आपको Member माना जाएगा।",
    {
      mainText:
        "आत्महत्या और हत्या के मामलों में कोई मदद नहीं की जाएगी। हत्या के मामलों की जांच की जाएगी, कुछ मामलों में मदद दी जा सकती है। हत्या के इन cases में मदद नहीं की जाएगी:",
      bullets: [
        "अगर नॉमिनी Member का कर दे।",
        "कोई सगा रिश्तेदार मदद मिलने के लालच में कर दे।",
        "Member किसी को मारने जाए और खुद का मर्डर हो जाए।",
        "दुश्मनी में मारा जाए।",
        "Police case में मारा जाए।",
      ],
    },
    "एक से अधिक नॉमिनी होने पर Foundation अपने हिसाब से मदद की राशी को बांटेगी।",
    "Nominee/Nominees की ID, आधार और बैंक डिटेल्स देनी होंगी।",
    "BEES Foundation किसी भी इंसान को जबरन या दबाव देकर मेंबर नहीं बनाती है। Members को Rules स्वीकार करके ही Member बनने का Option दिया जाता है। अपनी मर्जी से कोई भी सदस्य कभी भी खुद को अलग कर सकता है।",
    "Foundation का उद्देश्य अपने सदस्यों की मदद करने के साथ-साथ शिक्षा के क्षेत्र में काम करना भी है। Foundation अपनी गतिविधियों के लिए 15-20% धनराशि बचाएगी और सदस्यों की संख्या बढ़ने पर यह प्रतिशत बढ़ाया भी जा सकता है।",
    "नियमों में कभी भी संशोधन किया जा सकता है।",
  ];

  const rules = isHindi ? hindiRules : englishRules;

  return (
    <Box sx={{ backgroundColor: "#e0f7fa", color: "#004d40", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 5,
            color: "#00695c",
          }}
        >
          Rules to Become a Member
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggleLanguage}
          sx={{ marginBottom: 4 }}
        >
          {isHindi ? "See in English" : "See in Hindi"}
        </Button>
        <List
          sx={{
            bgcolor: "#ffffff",
            borderRadius: "10px",
            p: 4,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          {rules.map((rule, index) => (
            <ListItem key={index} sx={{ mb: 2 }}>
              <ListItemText
                primary={
                  typeof rule === "string" ? (
                    `${index + 1}. ${rule}`
                  ) : (
                    <>
                      {`${index + 1}. ${rule.mainText}`}
                      <List sx={{ pl: 4, mt: 1 }}>
                        {rule.bullets.map((bullet, subIndex) => (
                          <ListItem
                            key={subIndex}
                            sx={{
                              listStyleType: "disc",
                              display: "list-item",
                              p: 0,
                            }}
                          >
                            <Typography variant="body2">{bullet}</Typography>
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )
                }
                sx={{ color: "#004d40" }}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default RulesPage;
