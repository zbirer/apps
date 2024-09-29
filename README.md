# apps

https://zbirer.github.io/apps/rss-viewer.html

https://zbirer.github.io/apps/pulse-calculator-webpage.html

https://zbirer.github.io/apps/json-viewer.html


# prompt for json viewer

Certainly! Below is a two-level structured prompt designed to guide GPT in generating the HTML page for the JSON Viewer Tool with all the specified features and enhancements. The prompt includes detailed explanations of the logic and format of the page.

---

## **Level 1 Prompt: Project Overview**

**Title:** Create an Interactive JSON Viewer Tool Web Page

**Objective:**

Develop an interactive web page called **"JSON Viewer Tool"** that allows users to:

- Input a JSON string.
- Search for values within the JSON data.
- Display the JSON in an expandable/collapsible tree structure.
- Navigate between occurrences of the search value.
- View the path of any node within the JSON tree.

**Main Features:**

1. **Input Fields and Labels:**

   - **JSON Input:**
     - A textarea labeled **"JSON Input:"** for users to paste or type their JSON string.
   - **Search Value:**
     - An input field labeled **"Search Value:"** for users to enter the value they wish to search for.
   - **Buttons:**
     - A **"Search"** button to initiate the search.
     - **"Search Prev"** and **"Search Next"** buttons to navigate between occurrences of the search value.
     - These buttons should be disabled when not applicable (e.g., when there are no occurrences to navigate).
   - **Path Displays:**
     - A section labeled **"Path:"** to display the path to the current occurrence found by the search.
     - A section labeled **"Node Path:"** to display the path of a node when the **"Show Path"** button is clicked.

2. **Fixed Top Container:**

   - The top part of the page containing the input fields, labels, buttons, and path displays should remain **fixed at the top** of the page.
   - This ensures that the search controls are always accessible, even when scrolling through long JSON data.

3. **JSON Tree Display:**

   - The JSON data should be displayed as an **expandable/collapsible tree** below the fixed top container.
   - **Node Interactions:**
     - Clicking on a node expands or collapses its children.
     - **Hover Actions:**
       - When hovering over a node, action buttons appear:
         - **"Expand"** button to expand the node.
         - **"Collapse"** button to collapse the node.
         - **"Show Path"** button to display the full path of the node.
       - Only one set of action buttons should be visible at a time (on the node being hovered over).
   - **Node Labels:**
     - **For Object Nodes:**
       - Display the key name.
       - When collapsed and containing an **'id'** or **'name'**, append the value in square brackets. For example:
         - `user [Alice]:`
     - **For Array Nodes:**
       - Display the key name.
       - When collapsed, display the number of children in the format:
         - `categories: (3 children)`
     - **For Array Items:**
       - Display the index in square brackets.
       - If the item contains an **'id'** or **'name'**, display it next to the index. For example:
         - `[2] Item Name`
     - **Formatting:**
       - Use colons `:` to separate keys and values.
       - Ensure consistent and clear labeling for easy readability.

4. **Search Functionality:**

   - The search should be **case-insensitive**.
   - **Search Process:**
     - When the user enters a search value and clicks **"Search"** or presses **Enter**, the tool searches for all occurrences of the value within the JSON data.
     - The tree expands to show the path to the current occurrence.
     - Matching values are **highlighted** for visibility.
     - The **"Search Prev"** and **"Search Next"** buttons allow the user to navigate between occurrences.
   - **Search Input Behavior:**
     - Pressing **Enter** in the search input field should trigger the search, simulating a click on the **"Search"** button.

5. **Visual Enhancements:**

   - Apply a **modern and clean design** with a light background color.
   - **Typography:**
     - Use a legible sans-serif font for better readability.
   - **Buttons and Inputs:**
     - Style buttons with background colors, padding, rounded corners, and hover effects.
     - Disabled buttons should appear grayed out.
     - Style input fields with borders, padding, and focus effects.
   - **JSON Tree:**
     - Use icons or symbols (e.g., triangles) to indicate expandable/collapsible nodes.
     - Apply smooth transitions when nodes expand or collapse.
   - **Highlighting:**
     - Highlight matching search results with a subtle background color to draw attention without being overwhelming.

6. **Responsive Design:**

   - Ensure the page is **responsive** and functions well on various screen sizes, including desktops, tablets, and mobile devices.
   - **Media Queries:**
     - Adjust layout and element sizes using CSS media queries for smaller screens.
   - **User Experience:**
     - Maintain usability and accessibility across devices.

---

## **Level 2 Prompt: Implementation Details**

**Instructions:**

Implement the above features using **HTML**, **CSS**, and **JavaScript**. Follow best practices for web development, ensuring clean, maintainable code with appropriate comments.

### **HTML Structure:**

- **Document Setup:**

  - Use the `<!DOCTYPE html>` declaration and include necessary `<html>`, `<head>`, and `<body>` tags.
  - Set the character encoding to UTF-8.

- **Head Section:**

  - Include a `<title>` tag with the page title "JSON Viewer Tool".
  - Link any external stylesheets if necessary (preferably use internal styles for this implementation).

- **Body Section:**

  - **Fixed Top Container (`#topContainer`):**
    - Contains all the input fields, labels, buttons, and path displays.
    - Use a `<div>` with the `id="topContainer"` and apply fixed positioning.
    - **Components:**
      - A `<h2>` heading with the title "JSON Viewer Tool".
      - A `<label>` and `<textarea>` for **JSON Input**.
      - A `<label>` and `<input>` for **Search Value**.
      - Buttons for **"Search"**, **"Search Prev"**, and **"Search Next"**.
      - `<div>` elements with classes **"path"** for displaying **"Path:"** and **"Node Path:"**.
  - **JSON Tree Container (`#jsonTreeContainer`):**
    - A `<div>` that contains the JSON tree.
    - Positioned below the fixed top container with appropriate `margin-top`.
    - Includes a `<div>` with the `id="jsonTree"` where the dynamic tree will be rendered.

### **CSS Styling:**

- **General Styles:**

  - Set a light background color for the body (e.g., `#f5f5f5`).
  - Use a clean sans-serif font family for all text.

- **Fixed Top Container (`#topContainer`):**

  - Apply fixed positioning with `position: fixed; top: 0; left: 0; right: 0;`.
  - Add padding and a background color (e.g., white).
  - Include a subtle box-shadow for visual separation.
  - Adjust `z-index` to ensure it stays above other content.

- **Input Fields and Labels:**

  - Style `<textarea>` and `<input>` elements with borders, padding, and rounded corners.
  - Use `box-sizing: border-box;` to ensure consistent sizing.
  - Align labels with their corresponding input fields for clarity.

- **Buttons:**

  - Style buttons with background colors (e.g., blue for primary actions), white text, and rounded corners.
  - Apply hover effects to buttons (e.g., darken background on hover).
  - Style disabled buttons to appear inactive (e.g., gray background).
  - Ensure buttons have consistent padding and margin.

- **Path Displays:**

  - Style the `.path` class to display the path information with appropriate font weight and color.

- **JSON Tree (`#jsonTreeContainer` and `#jsonTree`):**

  - Set the `#jsonTreeContainer` to have a `margin-top` that accounts for the fixed top container's height.
  - Apply padding and set `max-height` with `overflow-y: auto;` to make the tree scrollable independently.
  - Style the tree to represent the hierarchical structure using nested `<ul>` and `<li>` elements.
  - Remove default list styling and apply custom indentation.

- **Collapsible Nodes:**

  - Use the `.collapsible` class for nodes that can be expanded or collapsed.
  - Include a triangle icon before the node label that rotates based on the expanded/collapsed state.
  - Apply smooth transitions for expand/collapse animations.

- **Node Buttons:**

  - Style the action buttons (`.node-buttons`) that appear on hover over a node.
  - Include styles for the **"Expand"**, **"Collapse"**, and **"Show Path"** buttons, each with distinct colors.
  - Position the buttons inline with the node label.

- **Highlighting Matches:**

  - Use the `.highlight` class to style matching search results.
  - Apply a subtle background color and rounded corners to highlighted text.

- **Responsive Design:**

  - Use media queries to adjust styles for screens smaller than 600px.
  - Ensure input fields and buttons stack vertically on small screens.
  - Adjust padding and margins for better usability on mobile devices.

### **JavaScript Functionality:**

- **Event Listeners:**

  - Add event listeners for the **"Search"**, **"Search Prev"**, and **"Search Next"** buttons.
  - Add an event listener to trigger search when **Enter** is pressed in the search input field.

- **Search Functionality:**

  - Parse the JSON input and handle errors with appropriate alerts.
  - Implement a recursive search function that traverses the JSON object to find all occurrences of the search value (case-insensitive).
  - Store occurrences with their paths and values.

- **Display Logic:**

  - Dynamically build the JSON tree in the `#jsonTree` `<div>` using DOM manipulation.
  - For each node:
    - Create `<li>` elements with expandable/collapsible functionality.
    - Apply labels as per the specifications (including 'id', 'name', and number of children for arrays).
    - Implement expand/collapse behavior on click events.
    - Highlight matching values.

- **Node Interactions:**

  - Show action buttons on hover over nodes.
  - Implement the **"Expand"**, **"Collapse"**, and **"Show Path"** button functionalities.
  - Ensure that only one set of action buttons is visible at a time.

- **Navigation Between Occurrences:**

  - Implement logic for the **"Search Prev"** and **"Search Next"** buttons to navigate through found occurrences.
  - Update the displayed path and highlight the current occurrence.

- **Utility Functions:**

  - Create functions to update button states, handle node label updates, and manage the current hovered node.

- **Code Organization:**

  - Use clear and descriptive variable and function names.
  - Comment the code to explain key sections and logic for maintainability.

### **Additional Considerations:**

- **Compatibility:**

  - Ensure the page works across modern web browsers (Chrome, Firefox, Edge, Safari).

- **Performance:**

  - Optimize the recursive functions to handle reasonably large JSON data without significant lag.

- **Accessibility:**

  - Use semantic HTML elements where appropriate.
  - Ensure that interactive elements are keyboard-accessible.

- **Error Handling:**

  - Provide user-friendly error messages for invalid JSON input or other exceptions.

- **Testing:**

  - Test the page with various JSON inputs, including edge cases like empty arrays, deeply nested objects, and special characters.

---

By following this detailed prompt, you should be able to generate an HTML page that meets all the specified requirements. The page will be an interactive and user-friendly tool for viewing and searching JSON data, complete with a modern design and responsive layout.

If you have any questions or need further clarification on any of the sections, feel free to ask!
