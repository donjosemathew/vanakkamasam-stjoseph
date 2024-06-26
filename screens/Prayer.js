import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  StatusBar as SB,
} from "react-native";
import BottomSheetComponent from "../Bottomsheet/BottomSheet";
import globalStyles from "../styles/globalStyles";
import homeStyles from "../styles/homeStyles";
import prayerStyles from "../styles/prayerStyles";
import { RFValue } from "react-native-responsive-fontsize";
import { SharedElement } from "react-navigation-shared-element";
import { datatext } from "../data/sacredHeart";

function PrayerScreen({ route, navigation }) {
  //////////////////////
  const [fontSize, SetFontSize] = useState(16);
  const [textAlign, SettextAlign] = useState("justify");
  //////////
  data = {
    text: `പരിശുദ്ധ കന്യകാമറിയത്തിന് ക്രിസ്തീയ ജീവിതത്തില്‍ അതുല്യമായ സ്ഥാനമാണുള്ളത്. ദൈവമാതാവെന്ന സ്ഥാനം മൂലം അവള്‍ സകല മനുഷ്യരുടെയും മാതാവാണ്. സഹരക്ഷക എന്ന നിലയില്‍ ക്രിസ്തുവിന്‍റെ രക്ഷാകര പ്രവൃത്തിയില്‍ മറ്റാരെക്കാളുമധികം പങ്കുചേർന്ന് നമ്മെ സഹായിക്കുന്നു. നമ്മുടെ ആദ്ധ്യാത്മിക ജനനിയെന്ന പദവി മൂലം സകല പ്രസാദവരങ്ങളുടെയും ഉറവിടമായി, മറിയം നിലകൊള്ളുന്നു. നിത്യരക്ഷയ്ക്കുള്ള മാറ്റമില്ലാത്ത അടയാളമാണ് ദൈവമാതാവിനോടുള്ള ഭക്തിയെന്ന് എല്ലാ ദൈവശാസ്ത്രജ്ഞന്‍മാരും ഒരേ സ്വരത്തില്‍ അഭിപ്രായപ്പെടുന്നു.

    പരിശുദ്ധ കന്യകാമറിയത്തോടുള്ള ഭക്തി നമ്മുടെ പുണൃജീവിതത്തിനും സ്വര്‍ഗ്ഗപ്രാപ്തിക്കും ഫലദായകമാണ്. പരിശുദ്ധിയുടെ വിളനിലമായിരുന്നു നമ്മുടെ അമ്മ. പുണ്യസമ്പാദനത്തിനുള്ള പരിശ്രമങ്ങളില്‍ എപ്പോഴും നമുക്ക് മാതൃക ആക്കേണ്ടത് സകല പുണ്യങ്ങളും കൊണ്ട് അലംകൃതമായ പരിശുദ്ധ കന്യകാമറിയത്തെയാണ്. ജന്മം കൊണ്ടും കര്‍മ്മങ്ങള്‍ കൊണ്ടും താന്‍ സമ്പാദിച്ച പുണ്യഫലങ്ങള്‍ ലോകം മുഴുവനുമായി വിനിയോഗിക്കുവാന്‍ മറിയം ആഗ്രഹിക്കുന്നു. നമ്മുടെ വിശുദ്ധിയുടെ അളവുകോല്‍ ഈശോയുമായുള്ള നമ്മുടെ ബന്ധത്തിന്‍റെ ആഴം അനുസരിച്ചാണ്. സകല മനുഷ്യരിലും വിശുദ്ധരിലും വച്ച് പരിശുദ്ധ കന്യകാമറിയത്തെ പോലെ ഈശോയുമായി ബന്ധപ്പെട്ട വ്യക്തി ആരാണുള്ളത്?
    
    സ്വന്തം പുത്രനെന്ന നിലയില്‍ ഈശോ മറിയവുമായി അഭേദ്യമായ രീതിയില്‍ ബന്ധപ്പെട്ടിരിക്കുന്നു. മാനുഷികവും ദൈവികവുമായ സകലവിധ പരിശുദ്ധിയുടെയും കേന്ദ്രമാണ് പരിശുദ്ധ അമ്മ. സ്വര്‍ഗ്ഗീയ നന്മകള്‍ നമുക്ക് പ്രാപിക്കുവാനും ഈശോയുടെ ഹൃദയത്തിന് അനുരൂപമായ ഒരു ജീവിതം നയിക്കുന്നതിനും മറിയത്തോടുള്ള ഭക്തി തീര്‍ച്ചയായും നമുക്ക് സഹായകമാണ്. നമ്മെ അലട്ടുന്ന ദാരിദ്ര്യം, തൊഴിലില്ലായ്മ, അസമാധാനം മുതലായ പ്രശ്നങ്ങള്‍ക്ക് പരിഹാരം നേടുവാന്‍ ദൈവമാതാവിനോടുള്ള ഭക്തി സഹായകമാണ്.`,
    sambavam: `റോമാചക്രവര്‍ത്തിയും മതമർദ്ദകനുമായിരുന്ന ജൂലിയന്‍ തന്‍റെ സ്വന്ത സാമ്രാജ്യത്തില്‍ പേഗന്‍ മതം പുന:സ്ഥാപിക്കാന്‍ ആഗ്രഹിച്ചു. അതിനായി ക്രിസ്താനികളുടെ നേരെ കിരാത മര്‍ദ്ദനം അഴിച്ചു വിട്ടു. പേര്‍ഷ്യാക്കാരോടുള്ള യുദ്ധത്തിനു പുറപ്പെടുന്നതിനു മുന്‍പ് മിത്രാദേവിയുടെ അമ്പലത്തില്‍ പ്രവേശിച്ച് വഴിപാടു കഴിച്ചു. യുദ്ധത്തില്‍ ജയിക്കുന്ന പക്ഷം തന്‍റെ സാമ്രാജ്യത്തിലെ ക്രിസ്ത്യാനികളെ മുഴുവന്‍ ദേവിക്ക് ബലിയര്‍പ്പിക്കുന്നതാണെന്ന് അദ്ദേഹം പ്രതിജ്ഞ ചെയ്തു. ഈ നേര്‍ച്ചയേപ്പറ്റി അറിഞ്ഞ കേസറിയായിലെ മെത്രാനായ വിശുദ്ധ ബേസില്‍, തന്‍റെ കീഴിലുള്ള എല്ലാ ക്രിസ്ത്യാനികളേയും വിളിച്ചുകൂട്ടി. ഈ ആപത്ത്ഘട്ടത്തില്‍ പരിശുദ്ധ കന്യകാമറിയത്തോടുള്ള ഭക്തി മാത്രമേ പരിഹാരമായിട്ടുള്ളൂയെന്നു അദ്ദേഹം പറഞ്ഞു. വിശുദ്ധ ബേസിലിന്‍റെ പരിശുദ്ധ കന്യകയോടുള്ള ഭക്തിയും വിശ്വാസവും ജനങ്ങള്‍ക്കെല്ലാം മാതൃകയായി.

    എല്ലാവരും പരിശുദ്ധ കന്യകയില്‍ അഭയം ഗമിച്ചു പ്രാര്‍ത്ഥിച്ചു. ജൂലിയാന്‍, പേര്‍ഷ്യക്കാരുടേതിനേക്കാള്‍ ശക്തമായ ഒരു സൈന്യത്തോടെയാണ് യുദ്ധത്തിനു പുറപ്പെട്ടതെങ്കിലും പരാജിതനായി. ശത്രുകരത്തില്‍പെട്ട് മരിക്കുന്നതിനേക്കാള്‍ അഭിമാനകരം ആത്മഹത്യയാണെന്നു കരുതി അയാള്‍ സ്വന്തം വാളെടുത്ത് ചങ്കില്‍ കുത്തിയിറക്കി. അവിടെനിന്നും പ്രവഹിച്ച രക്തത്തില്‍ കൈമുക്കി മുഷ്ടി ആകാശത്തിലേക്കുയര്‍ത്തി ഇപ്രകാരം ജൂലിയാന്‍ വിളിച്ചു പറഞ്ഞു: "അല്ലയോ ഗലീലേയാ, നീ തന്നെ ജയിച്ചിരിക്കുന്നു". ഇന്നു തിരുസഭ വലിയ പ്രതിസന്ധികള്‍ തരണം ചെയ്യുകയാണ്. മരിയ ഭക്തര്‍ ഉണര്‍ന്ന് ദൈവമാതാവിന്‍റെ സഹായത്താല്‍ തിരുസഭയുടെ ശത്രുക്കളെ നേരിടാന്‍ തയ്യാറാകണം.`,
    prarthana: `കര്‍ത്താവേ, അങ്ങേ മണവാട്ടിയായ തിരുസ്സഭയ്ക്കു പൂര്‍ണ്ണസ്വാതന്ത്ര്യം കൊടുത്തരുളേണമേ. ഞങ്ങളുടെ പിതാവായ പരിശുദ്ധ പാപ്പായെ സംരക്ഷിക്കണമേ. എല്ലാവരും അങ്ങേ ഏക സത്യസഭയെ അറിഞ്ഞ് ഏക ഇടയന്‍റെ കീഴാകുന്നതിന് വേഗത്തില്‍ ഇടവരുത്തണമേ! നിര്‍ഭാഗ്യ പാപികളുടെമേല്‍ കൃപയായിരിക്കേണമേ. അനുഗ്രഹത്തിന്‍റെ അമ്മയായ മറിയമേ, ദിവ്യഹൃദയത്തിന്‍ നാഥേ! ഞാന്‍ അപേക്ഷിക്കുന്നതും ആഗ്രഹിക്കുന്നതുമായ സകല വരങ്ങളും അങ്ങേ ശക്തമായ മദ്ധ്യസ്ഥതയില്‍ ശരണപ്പെട്ട് അങ്ങു വഴിയായി ലഭിക്കുമെന്ന് പൂര്‍ണ്ണമായി ഉറച്ചിരിക്കുന്നു. ആമ്മേന്‍.

    3 സ്വര്‍ഗ്ഗ. 3 നന്മ. 3 ത്രി.
    
    സാധുശീലനും വിനീതഹൃദയനുമായ ഈശോയെ! ഞങ്ങളുടെ ഹൃദയവും അങ്ങേ ഹൃദയം പോലെ ആക്കണമേ.`,
    luthiniya: `കര്‍ത്താവേ! അനുഗ്രഹിക്കണമേ.

    മിശിഹായേ! അനുഗ്രഹിക്കണമേ.
    
    കര്‍ത്താവേ! അനുഗ്രഹിക്കണമേ.
    
    മിശിഹായേ! ഞങ്ങളുടെ പ്രാര്‍ത്ഥന കേള്‍ക്കണമേ.
    
    മിശിഹായേ! ഞങ്ങളുടെ പ്രാര്‍ത്ഥന കൈക്കൊള്ളണമേ.
    
    ആകാശങ്ങളിലിരിക്കുന്ന ബാവാ തമ്പുരാനേ,
    
    ഭൂലോകരക്ഷിതാവായ പുത്രന്‍ തമ്പുരാനേ,
    
    റൂഹാദക്കുദാശാ തമ്പുരാനേ,
    
    ഏകസ്വരൂപമായിരിക്കുന്ന ശുദ്ധ ത്രിത്വമേ,
    
    നിത്യപിതാവിന്‍ കുമാരനായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    (ഞങ്ങളെ അനുഗ്രഹിക്കണമേ)
    
    കന്യാസ്ത്രീ മാതാവിന്‍റെ തിരുവുദരത്തില്‍ പരിശുദ്ധാരൂപിയാല്‍ ഉരുവാക്കപ്പെട്ട ഈശോയുടെ തിരുഹൃദയമേ,
    
    ദൈവവചനത്തോടു കാതലായ വിധത്തില്‍ ഒന്നിച്ചിരിക്കുന്ന ഈശോയുടെ തിരുഹൃദയമേ,
    
    അനന്തമഹിമയുള്ള ഈശോയുടെ തിരുഹൃദയമേ,
    
    ദൈവത്തിന്‍റെ പരിശുദ്ധ ആലയമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    അത്യുന്നതന്‍റെ കൂടാരമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    ദൈവ ഭവനവും മോക്ഷവാതിലുമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    ജ്വലിച്ചെരിയുന്ന സ്നേഹാഗ്നിച്ചൂളയായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    നീതിയുടെയും സ്നേഹത്തിന്‍റെയും നിധിയായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    നന്മയും, സ്നേഹവും നിറഞ്ഞ ഈശോയുടെ തിരുഹൃദയമേ,
    
    സകല പുണ്യങ്ങളുടെയും ആഴമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    സകല‍ പുകഴ്ചയ്ക്കും എത്രയും യോഗ്യമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    സകല പുണ്യവാന്‍മാരുടെയും ആനന്ദമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    സകല ഹൃദയങ്ങള്‍ക്കും അധിപനും കേന്ദ്രവുമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    ജ്ഞാനത്തിന്റെയും അറിവിന്റെയും നിധിയൊക്കെയും ഉള്‍കൊണ്ടിരിക്കുന്ന ഈശോയുടെ തിരുഹൃദയമേ,
    
    ദൈവത്വത്തിന്‍ പൂര്‍ണ്ണതയൊക്കെയും വസിക്കുന്നതായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    നിത്യപിതാവിന് പ്രസാദിച്ചിരിക്കുന്നതായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    ഞങ്ങള്‍ക്കെല്ലാവര്‍ക്കും സിദ്ധിച്ചിരിക്കുന്ന നന്മകളുടെ സമ്പൂര്‍ണ്ണ നിധിയായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    നിത്യപര്‍വ്വതങ്ങളുടെ ആശയമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    ക്ഷമയും അധിക ദയയുമുള്ള ഈശോയുടെ തിരുഹൃദയമേ,
    
    അങ്ങേ കൃപ അപേക്ഷിക്കുന്ന സകലരെയും ഐശ്വര്യപ്പെടുത്തുന്ന ഈശോയുടെ തിരുഹൃദയമേ,
    
    ജീവന്റെയും വിശുദ്ധിയുടെയും ഉറവയായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    ഞങ്ങളുടെ പാപങ്ങള്‍ക്ക് പരിഹാരമായിരിക്കുന്ന ഈശോയുടെ തിരുഹൃദയമേ,
    
    നിന്ദകളാല്‍ പൂരിതമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    ഞങ്ങളുടെ അക്രമങ്ങള്‍ നിമിത്തം തകര്‍ന്ന ഈശോയുടെ തിരുഹൃദയമേ,
    
    മരണത്തോളം കീഴ് വഴങ്ങിയ ഈശോയുടെ തിരുഹൃദയമേ,
    
    സകല ആശ്വാസങ്ങളുടെയും ഉറവയായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    ഞങ്ങളുടെ ജീവനും ഉയിര്‍പ്പുമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    ഞങ്ങളുടെ സമാധാനവും അനുരജ്ഞനവുമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    പാപങ്ങള്‍ക്ക് പരിഹാരബലിയായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    അങ്ങയില്‍ ആശ്രയിക്കുന്ന രക്ഷയായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    അങ്ങില്‍ മരിക്കുന്നവരുടെ ശരണമായ ഈശോയുടെ തിരുഹൃദയമേ,
    
    ---ഭൂലോക പാപങ്ങളെ നീക്കിക്കളയുന്ന ദിവ്യചെമ്മരിയാട്ടിന്‍ കുട്ടി,
    
    കര്‍ത്താവേ! ഞങ്ങളുടെ പാപങ്ങള്‍ പൊറുക്കണമേ.
    
    ---ഭൂലോക പാപങ്ങളെ നീക്കിക്കളയുന്ന ദിവ്യചെമ്മരിയാട്ടിന്‍ കുട്ടി,
    
    കര്‍ത്താവേ! ഞങ്ങളുടെ പ്രാര്‍ത്ഥന കേള്‍ക്കണമേ.
    
    ---ഭൂലോക പാപങ്ങളെ നീക്കിക്കളയുന്ന ദിവ്യചെമ്മരിയാട്ടിന്‍ കുട്ടി,
    
    കര്‍ത്താവേ! ഞങ്ങളെ അനുഗ്രഹിക്കണമേ.
    
    `,
    japam: `സര്‍വശക്തനുമായ നിത്യനുമായ സര്‍വ്വേശ്വരാ! അങ്ങേ എത്രയും പ്രിയമുള്ള പുത്രന്‍റെ തിരുഹൃദയത്തേയും പാപികളുടെ പേര്‍ക്കായി അദ്ദേഹം അങ്ങേയ്ക്കു കാഴ്ച വെച്ച സ്തുതികളെയും പാപപരിഹാരങ്ങളെയും ഓര്‍ത്തു അങ്ങേ കൃപയെ യാചിക്കുന്നവര്‍ക്കു ദൈവമായ റൂഹാദ് കൂദാശയുടെ ഐക്യത്തില്‍ നിത്യമായി നിന്നോടുകൂടെ ജീവിച്ചു വാഴുന്ന അങ്ങേ പുത്രനായ ഈശോമിശിഹായുടെ നാമത്തില്‍ കൃപയുള്ളവനായി പൊറുതി നല്‍കിയരുളണമേ. ആമ്മേന്‍.`,
    sukruthajapam:
      "ക്രിസ്ത്യാനികളുടെ സഹായമായ മറിയമേ, ഞങ്ങള്‍ക്കു വേണ്ടി അപേക്ഷിക്കണമേ.",
  };
  const statusBar = SB.currentHeight;

  const devHeight = Dimensions.get("window").height;
  const scalePercentage = 0.25;
  const imageHeight = devHeight * 0.3;
  const imageResized = imageHeight * scalePercentage;
  const imageMargin = SB.currentHeight + 10;
  const imagePadding = 20;
  const imageViewHeight = imageHeight + imagePadding + imageMargin;
  const topbarheight = statusBar + imageResized + imagePadding / 2;
  const scrolling = useRef(new Animated.Value(0)).current;

  const scale = scrolling.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [1, scalePercentage],
    extrapolate: "clamp",
  });
  const opacity = scrolling.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const translationY = scrolling.interpolate({
    inputRange: [0, imageHeight],
    outputRange: [0, -topbarheight],
    extrapolate: "clamp",
  });
  ///////////
  ////
  let { day } = route.params;
  day = day - 1;
  console.log(day);
  return (
    <View style={globalStyles.parent}>
      <StatusBar backgroundColor="transparent" />

      <Image style={globalStyles.bg} source={require("../assets/bg1.png")} />

      <Animated.View
        style={[
          {
            height: topbarheight,
            opacity: opacity,
          },
          prayerStyles.topBar,
        ]}
      ></Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          padding: imagePadding,
          zIndex: 20,
          transform: [
            {
              translateY: translationY,
            },
            {
              scale: scale,
            },
          ],
        }}
      >
        <SharedElement id="mathav">
          <Image
            style={[
              homeStyles.image,
              {
                marginTop: imageMargin,
              },
            ]}
            source={require("../assets/images/mathav.jpg")}
          />
        </SharedElement>
      </Animated.View>
      <Animated.ScrollView
        onStartShouldSetResponder={() => true}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          }
        )}
        contentContainerStyle={[
          globalStyles.scrollView,
          {
            marginTop: imageViewHeight,
            paddingBottom: imageViewHeight + 100,
          },
        ]}
      >
        <Text
          style={[
            homeStyles.mlDate,
            prayerStyles.dateNum,
            ,
            { fontSize: RFValue(fontSize + 4) },
          ]}
        >
          {datatext[day].daytext}
        </Text>

        <Text
          style={[
            homeStyles.daySub,
            prayerStyles.subtext,
            { fontSize: RFValue(fontSize + 1) },
          ]}
        >
          {datatext[day].subject}
        </Text>

        <Text
          style={[
            prayerStyles.text,
            { fontSize: RFValue(fontSize), textAlign: textAlign },
          ]}
        >
          {datatext[day].intro}
        </Text>
        {/* <Text
          style={[prayerStyles.subHead, { fontSize: RFValue(fontSize + 2) }]}
        >
          സംഭവം
        </Text>
        <Text
          style={[
            prayerStyles.text,
            { fontSize: RFValue(fontSize), textAlign: textAlign },
          ]}
        >
          {datatext[day].incident}
        </Text> */}
        <Text
          style={[prayerStyles.subHead, { fontSize: RFValue(fontSize + 2) }]}
        >
          ജപം
        </Text>
        <Text
          style={[
            prayerStyles.text,
            { fontSize: RFValue(fontSize), textAlign: textAlign },
          ]}
        >
          {datatext[day].prayer}
        </Text>
        <Text
          style={[prayerStyles.subHead, { fontSize: RFValue(fontSize + 2) }]}
        >
          പ്രാര്‍ത്ഥന
        </Text>
        <Text
          style={[
            prayerStyles.text,
            { fontSize: RFValue(fontSize), textAlign: textAlign },
          ]}
        >
          {data.prarthana}
        </Text>
        {/* <Text
          style={[prayerStyles.subHead, { fontSize: RFValue(fontSize + 2) }]}
        >
          വിശുദ്ധ ബര്‍ണ്ണര്‍ദോസ് ദൈവമാതാവിനെ നോക്കി പ്രാര്‍ത്ഥിച്ച ജപം
        </Text>
        <Text
          style={[
            prayerStyles.text,
            { fontSize: RFValue(fontSize), textAlign: textAlign },
          ]}
        >
          {data.ethrayum}
        </Text> */}
        <Text
          style={[prayerStyles.subHead, { fontSize: RFValue(fontSize + 2) }]}
        >
          ഈശോമിശിഹായുടെ തിരുഹൃദയ ലുത്തിനിയ
        </Text>
        <Text
          style={[
            prayerStyles.text,
            prayerStyles.luthiniya,
            { fontSize: RFValue(fontSize) },
          ]}
        >
          {data.luthiniya}
        </Text>
        <Text
          style={[prayerStyles.subHead, { fontSize: RFValue(fontSize + 2) }]}
        >
          പ്രാര്‍ത്ഥിക്കാം
        </Text>
        <Text
          style={[
            prayerStyles.text,
            { fontSize: RFValue(fontSize), textAlign: textAlign },
          ]}
        >
          {data.japam}
        </Text>

        <Text
          style={[prayerStyles.subHead, { fontSize: RFValue(fontSize + 2) }]}
        >
          സുകൃതജപം
        </Text>
        <Text
          style={[
            prayerStyles.text,
            { fontSize: RFValue(fontSize), textAlign: textAlign },
          ]}
        >
          {datatext[day].sukruthajapam}
        </Text>

        <Text
          style={[prayerStyles.subHead, { fontSize: RFValue(fontSize + 2) }]}
        >
          സൽക്രിയ
        </Text>
        <Text
          style={[
            prayerStyles.text,
            { fontSize: RFValue(fontSize), textAlign: textAlign },
          ]}
        >
          {datatext[day].salkriya}
        </Text>
        {day == 29 && (
          <>
            <Text
              style={[
                prayerStyles.subHead,
                { fontSize: RFValue(fontSize + 2) },
              ]}
            >
              ഈശോയുടെ ദിവ്യഹൃദയത്തിനു സ്വയം കാഴ്ച വയ്ക്കുന്ന ജപം
            </Text>
            <Text
              style={[
                prayerStyles.text,
                { fontSize: RFValue(fontSize), textAlign: textAlign },
              ]}
            >
              {datatext[day].lastprayer}
            </Text>
            <Text
              style={[
                prayerStyles.subHead,
                { fontSize: RFValue(fontSize + 2) },
              ]}
            >
              തിരുഹൃദയ ജപമാല
            </Text>
            <Text
              style={[
                prayerStyles.text,
                { fontSize: RFValue(fontSize), textAlign: textAlign },
              ]}
            >
              {datatext[day].lastprayerJapamala}
            </Text>
          </>
        )}
      </Animated.ScrollView>
      {/* <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      /> */}
      <BottomSheetComponent
        textAlign={textAlign}
        SettextAlign={SettextAlign}
        fontSize={fontSize}
        SetFontSize={SetFontSize}
      />
    </View>
  );
}

export default PrayerScreen;
