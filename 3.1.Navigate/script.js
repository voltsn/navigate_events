/*
 * Select the last child of the ol tag and put it
 * at the beginning of the list.
*/
let orderedList = document.querySelector("ol");
let lastChildInList = orderedList.lastElementChild;
let listChildren = Array.from(orderedList.children);

// Add last element at the start of the array.
listChildren.unshift(lastChildInList);

// Remove duplicate from the back of the list.
listChildren.pop();

// Update the list.
listChildren.forEach( (child) => {
  orderedList.appendChild(child);
});

/*
 * Swap the h2 of the third section and the second section.
 */
const sections = document.querySelectorAll("section");
const secondSectionHeading = sections[1].querySelector("h2");
const thirdSectionHeading = sections[2].querySelector("h2");
sections[2].children[0].insertBefore(secondSectionHeading, thirdSectionHeading);
sections[1].insertBefore(thirdSectionHeading, sections[1].lastElementChild);

/*
 * Delete the last section of the page.
 */
const lastSection = document.querySelector("section:last-child");
const sectionParent = lastSection.parentElement;
sectionParent.removeChild(lastSection);
