function indexOfIgnoreCase(s1, s2) {
  // Edge case: empty substring
  if (s2 === "") return 0;

  // Convert both strings to lowercase for case-insensitive comparison
  const str = s1.toLowerCase();
  const sub = s2.toLowerCase();
 
  return str.indexOf(sub);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
