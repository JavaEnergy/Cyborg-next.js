'use client';

import React, { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';
import './AccordionComponent.css';
import PropTypes from 'prop-types';

const AccordionComponent = ({ items }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedItem(null);
  };

  return (
    <>
      <ul className="accordion">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleOpenModal(item)}
            className="accordion-item"
          >
            <img 
              src={item.img}
              alt={item.alt}
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="accordion-item-modal-title"
        aria-describedby="accordion-item-modal-description"
      >
        <Box className="accordion-modal-box">
          {selectedItem && (
            <>
              <img
                src={selectedItem.img}
                alt={selectedItem.alt}
                className="accordion-full-image"
                loading="lazy"
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCloseModal}
                style={{ marginTop: '16px' }}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

AccordionComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AccordionComponent; 