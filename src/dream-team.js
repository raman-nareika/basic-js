module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }

  let name = "";
  const regexp = /\s/g;
  members.forEach(member => {
    if(typeof member === "string" && member.length > 0) {
      member = member.replace(regexp, "");
      name += member[0].toUpperCase();
    }
  });

  if(name.length > 1) {
    name = name.split("").sort().join("");
    return name;
  }

  return  false;
};