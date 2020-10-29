const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members) || members === null) {
        return false;
    }
  members.forEach((element,index) => {
    if (typeof element !== 'string') {
        return false;
    }    
    element = element.toUpperCase().replace(/\s+/gmi, "");
    
    members[index] = element;
});
members.sort();
let teamName = '';
for (let i = 0; i < members.length; i++) {
    if ( typeof members[i] === 'string') {
        teamName = teamName.concat(members[i].charAt(0)); 
    } else {
        continue;
    }
} 
    return teamName;
};
