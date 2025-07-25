// Translations object
const translations = {
    en: {
        'nav.location': 'Location',
        'nav.properties': 'Properties',
        'nav.nature': 'Nature',
        'nav.investment': 'Investment',
        'nav.tagline': 'By Introduction Only',
        'hero.title': 'Rezydencja Leśna Królewo',
        'hero.subtitle': 'Custodians of Europe\'s Last Sovereign Wilderness',
        'hero.tagline': 'Where dynasties secure their legacy',
        'hero.badge1': 'Board Approval Only',
        'hero.badge2': 'Twelve Families Globally',
        'hero.badge3': 'One Client Per Quarter',
        'value.intro': 'Introduction Only',
        'value.intro.sub': 'No Exceptions',
        'value.privacy': 'Complete Privacy',
        'value.privacy.sub': 'No Public Records',
        'value.service': 'Silent Service',
        'value.service.sub': 'Invisible Excellence',
        'value.heritage': 'Heritage Properties',
        'value.heritage.sub': 'Never Listed Before',
        'location.title': 'A Realm Reserved for Few',
        'location.subtitle': 'Properties of historical significance',
        'location.heading': 'The Rezydencja Leśna Królewo Territory'
    },
    de: {
        'nav.location': 'Lage',
        'nav.properties': 'Anwesen',
        'nav.nature': 'Natur',
        'nav.investment': 'Investment',
        'nav.tagline': 'Nur mit Empfehlung',
        'hero.title': 'Rezydencja Leśna Królewo',
        'hero.subtitle': 'Hüter von Europas letzter souveräner Wildnis',
        'hero.tagline': 'Wo Dynastien ihr Vermächtnis sichern',
        'hero.badge1': 'Nur mit Vorstandsgenehmigung',
        'hero.badge2': 'Zwölf Familien weltweit',
        'hero.badge3': 'Ein Kunde pro Quartal',
        'value.intro': 'Nur mit Einführung',
        'value.intro.sub': 'Keine Ausnahmen',
        'value.privacy': 'Absolute Privatsphäre',
        'value.privacy.sub': 'Keine öffentlichen Aufzeichnungen',
        'value.service': 'Diskrete Betreuung',
        'value.service.sub': 'Unsichtbare Exzellenz',
        'value.heritage': 'Historische Anwesen',
        'value.heritage.sub': 'Nie zuvor angeboten',
        'location.title': 'Ein Reich für Wenige',
        'location.subtitle': 'Anwesen von historischer Bedeutung',
        'location.heading': 'Das Rezydencja Leśna Królewo Territorium'
    },
    fr: {
        'nav.location': 'Emplacement',
        'nav.properties': 'Propriétés',
        'nav.nature': 'Nature',
        'nav.investment': 'Investissement',
        'nav.tagline': 'Sur Introduction Uniquement',
        'hero.title': 'Rezydencja Leśna Królewo',
        'hero.subtitle': 'Gardiens de la dernière nature souveraine d\'Europe',
        'hero.tagline': 'Où les dynasties assurent leur héritage',
        'hero.badge1': 'Approbation du conseil uniquement',
        'hero.badge2': 'Douze familles dans le monde',
        'hero.badge3': 'Un client par trimestre',
        'value.intro': 'Introduction uniquement',
        'value.intro.sub': 'Aucune exception',
        'value.privacy': 'Confidentialité absolue',
        'value.privacy.sub': 'Aucun registre public',
        'value.service': 'Service silencieux',
        'value.service.sub': 'Excellence invisible',
        'value.heritage': 'Propriétés patrimoniales',
        'value.heritage.sub': 'Jamais listées auparavant',
        'location.title': 'Un royaume réservé à quelques-uns',
        'location.subtitle': 'Propriétés d\'importance historique',
        'location.heading': 'Le territoire Rezydencja Leśna Królewo'
    },
    pl: {
        'nav.location': 'Lokalizacja',
        'nav.properties': 'Nieruchomości',
        'nav.nature': 'Natura',
        'nav.investment': 'Inwestycja',
        'nav.tagline': 'Tylko przez polecenie',
        'hero.title': 'Rezydencja Leśna Królewo',
        'hero.subtitle': 'Strażnicy ostatniej suwerennej puszczy Europy',
        'hero.tagline': 'Gdzie dynastie zabezpieczają swoje dziedzictwo',
        'hero.badge1': 'Tylko za zgodą zarządu',
        'hero.badge2': 'Dwanaście rodzin na świecie',
        'hero.badge3': 'Jeden klient na kwartał',
        'value.intro': 'Tylko przez polecenie',
        'value.intro.sub': 'Bez wyjątków',
        'value.privacy': 'Całkowita prywatność',
        'value.privacy.sub': 'Brak publicznych rejestrów',
        'value.service': 'Dyskretna obsługa',
        'value.service.sub': 'Niewidoczna doskonałość',
        'value.heritage': 'Posiadłości dziedzictwa',
        'value.heritage.sub': 'Nigdy wcześniej nie oferowane',
        'location.title': 'Królestwo zarezerwowane dla nielicznych',
        'location.subtitle': 'Nieruchomości o znaczeniu historycznym',
        'location.heading': 'Terytorium Rezydencji Leśnej Królewo'
    }
};

// Change language function
function changeLanguage(lang) {
    console.log('changeLanguage called with:', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('Elements with data-i18n found:', elements.length);
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update page language attribute
    document.documentElement.lang = lang;
}

// Initialize language switcher when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const languageButtons = document.querySelectorAll('.lang-btn');
    console.log('Language buttons found:', languageButtons.length);
    
    let currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Set initial language
    changeLanguage(currentLang);
    
    // Set active button
    languageButtons.forEach(button => {
        if (button.getAttribute('data-lang') === currentLang) {
            button.classList.add('active');
        }
        
        // Add click event
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            languageButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Change language
            const selectedLang = this.getAttribute('data-lang');
            changeLanguage(selectedLang);
            localStorage.setItem('selectedLanguage', selectedLang);
        });
    });
});