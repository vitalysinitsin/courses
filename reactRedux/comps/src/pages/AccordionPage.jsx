import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "24323zxc12",
      label: "Can you use react for a project?",
      content: "You can use React for any project you want.",
    },
    {
      id: "287653gdwer3",
      label: "Can you use react for a project?",
      content: "You can use React for any project you want.",
    },
    {
      id: "23623zger211",
      label: "Can you use react for a project?",
      content: "You can use React for any project you want.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
