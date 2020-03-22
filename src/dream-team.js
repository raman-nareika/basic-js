module.exports = function createDreamTeam(members) {
  let name = "";
  const regexp = /\s/g;
  members.forEach(member => {
    if(typeof member === "string" && member.length > 0) {
      name = name.replace(regexp, "");
      name += member[0];
    }
  });

  if(name.length > 1) {
    name.sort();
    return name;
  }

  return  false;
};