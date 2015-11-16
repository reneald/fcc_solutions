function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\s+|_+/g, "-").toLowerCase();
}

spinalCase('thisIsSpinalTap');