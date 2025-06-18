
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StrictAccordion() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    // Only allow switch to another panel, prevent collapsing current
    if (expanded !== panel) {
      setExpanded(panel);
    }
  };

  const accordions = [
    {
      id: "panel1",
      title: "1.Do we need to pay a security deposit?",
      content:
        "No, we do not require any security deposit. Rental payments are to be made on a prepaid basis, due on the 2nd of every month.",
    },
    {
      id: "panel2",
      title: "2. Are there any ongoing offers?",
      content:
        "Yes, we have different offers depending on the launch date and time. Currently, we’re offering a 20% discount for the first 10 seats at our center.",
    },
    {
      id: "panel3",
      title: "3.Will I need to pay for electricity, water, or housekeeping?",
      content:
        "No, for workstations, there are no additional charges for electricity, water, or housekeeping. For private cabins, only the electricity bill for AC usage will apply. Note: All charges are transparent, and there are no hidden fees—everything is clearly stated in your rental agreement.",
    },
    {
      id: "panel4",
      title: "4.How many cups of coffee and tea can I have?",
      content:
        "Unlimited coffee and tea! Enjoy as much hot coffee and tea as you like while you work—absolutely free.",
    },
    {
      id: "panel5",
      title: "5.Do you have parking space?",
      content: "Yes, ample parking space is available both within the premises and nearby for your two-wheelers and four-wheelers.",
    },
  ];

  return (
    <div>
      {accordions.map((item, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <motion.div
            ref={ref}
            key={item.id}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="w-full mt-2"
          >
            <Accordion
              className="mt-2 p-2 rounded-none"
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
            >
              <AccordionSummary
                expandIcon={
                  expanded === item.id ? (
                    <RemoveIcon className="text-red-500" />
                  ) : (
                    <AddIcon />
                  )
                }
              >
                <Typography>
                  <h1 className="text-lg font-bold">{item.title}</h1>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-gray-600">{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        );
      })}
    </div>
  );
}
