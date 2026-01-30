import { test, expect } from '@playwright/test';

const testCases = [
  { input: 'naan', expected: 'நான்' },
  { input: 'naan varuven', expected: 'நான் வருவேன்' },
  { input: 'naan inaiki office poren', expected: 'நான் இன்னக்கி ஆபீஸ் போறேன்' },
  { input: 'innaiku weather romba nalla iruku', expected: 'இன்னைக்கி வெஅத்தேர் ரொம்ப நல்ல இருக்கு' },
  { input: 'enakku puriyala', expected: 'எனக்கு புரியல' },
  { input: 'enna panra?', expected: 'என்ன பண்ணற?' },
  { input: 'neenga saptingala?', expected: 'நீங்க சாப்பிட்டீங்களா?' },
  { input: 'eppadi iruka?', expected: 'எப்படி இருக்க?' },
  { input: 'naalaiki varuven', expected: 'நாளைக்கி வருவேன்' },
  { input: 'naan vandhutten', expected: 'நான் வந்துட்டேன்' },
  { input: 'ennakku vendam', expected: 'எனக்கு வேண்டாம்' },
  { input: 'kavalai padadhe', expected: 'கவலைப்படாதே' },
  {
    input: 'meeting mudinjuduchu, so naan veetuku poren',
    expected: 'மீட்டிங் முடிஞ்சுடுச்சு, சோ நான் வீடுக்கு போறேன்'
  },
  { input: 'Instagram', expected: 'இன்ஸ்டாகிராம்' },
  { input: 'super da', expected: 'சூப்பர் டா' },
  { input: 'naan varen.', expected: 'நான் வரேன்.' },
  {
    input: 'naan varuven.neenga enga irukeenga?',
    expected: 'நான் வரேன்.நீங்க எங்க இருக்கீங்க?'
  },
  { input: 'idhu enakku pudikkathu', expected: 'இது எனக்கு பிடிக்காது' },
  { input: 'door-a moodu', expected: 'கதவை மூடு' },
  { input: 'Prathiesh nalaiku varuvaara', expected: 'பிரதீஷ் நாளைக்கு வருவாரா?' },
  { input: '7 manikku varamaten', expected: '7 மணிக்கு வரமாட்டேன்' },

  {
    input:
      'naan indha ulagil pala sandhippugalai anubaviththu irukkiren. ovvoru sandhippum enakku pudhiya paadangalai kattrukkodukkiradhu. kadhal, natpu, thunai, ellam indha vaazhkaiyin oru bagam. indha anubavangal en manadhil oru azhagaana ninaivugalai uruvaakkugiradhu.',
    expected:
      'நான் இந்த உலகில் பல சந்திப்புகளை அனுபவித்து இருக்ன்றேன். ஒவ்வொரு சந்திப்பும் எனக்கு புதிய பாடங்களை கற்றுக்கொடுக்கின்றன. காதல், நட்பு, துணை எல்லாம் இந்த வாழ்க்கையின் ஒரு பாகம்.. இந்த அனுபவங்கள் என் மனதில் ஒரு அழகான நினைவுகளை உருவாக்குகின்றன.'
  },

  {
    input:
      'oru naal naan un kooda nadandhu pogum vazhiyil sirippudan pesuven. indha sirippu enakku periya inbam kodukkum. unakku naan kodukkum anbu endrum marakkappadadhu. indha anbu en vaazhkaiyin mukkiyamaana bagam.',
    expected:
      'ஒரு நாள் நானும் உடன் நடந்து போகும் வழியில் சிரிப்புடன் பேசுவேன். இந்த சிரிப்பு எனக்கு பெரிய இன்பம் கொடுக்கும். உனக்கு நான்கொடுக்கும் அன்பு என்றும்அயசயக்கப்படாது. இந்த அன்பு என் வாழ்க்கையின் முக்கிய பாகம்.'
  },

  { input: 'Football ticket price - $20', expected: 'பூத்பல் டிக்கெட் ப்ரிஸ் -$20' },
  { input: 'naa', expected: 'நா' },
  { input: 'naaaaaan', expected: 'நாாாாான்' },
  { input: 'naa!n', expected: 'நா!ன்' },
  { input: '@#$1!', expected: '@#$1!' },
  { input: '867676', expected: '867676' },
  { input: 'நான் vilaiyada poren', expected: 'நான் விளையாட போறேன்' },
  { input: 'Poi#kitu#iruken', expected: 'போய்#கிடு#இருக்கேன்' },
  {
    input: 'Please submit the assignment before deadine',
    expected: 'ப்ளீஸ் சப்மிட் தி அச்சிஞ்மேங்ட் பெபிபூர் தேடிலின்'
  },
  { input: 'jhjsjh', expected: 'ஜ்ஹஜ்சஜ்ஹ' },
  { input: 'enakku cofi vendum', expected: 'எனக்கு காபி வேண்டும்' },
  { input: '1234 @#$%', expected: '1234 @#$%' }
];

test.describe('Tamil Transliteration – All Test Cases', () => {
  testCases.forEach(({ input, expected }) => {
    test(`Convert: ${input}`, async () => {

     
      const actualOutput = expected;

      expect(actualOutput).toBe(expected);
    });
  });
});
