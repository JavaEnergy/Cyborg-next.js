'use client';

import React, { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';
import Image from 'next/image';
import './AccordionComponent.css';
import PropTypes from 'prop-types';
import OptimizedImageCaseInsensitive from '../OptimizedImageCaseInsensitive';

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
            <OptimizedImageCaseInsensitive
              src={item.img}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              quality={95}
              priority={true}
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
              <OptimizedImageCaseInsensitive
                src={selectedItem.img}
                alt={selectedItem.alt}
                width={800}
                height={600}
                className="accordion-full-image"
                quality={95}
                style={{ 
                  maxHeight: '70vh', 
                  maxWidth: '100%',
                  width: 'auto',
                  objectFit: 'contain'
                }}
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