import React from 'react';
import BackupButton from '.';

export default {
  title: 'atoms|BackupButton',
  component: BackupButton,
};

export const Summary = () => (
  <>
    <BackupButton text="registry" />
    <BackupButton onClick={() => {}} text="login" />
    <BackupButton onClick={() => {}} text="logout" />
    <BackupButton onClick={() => {}} text="write" />
    <BackupButton onClick={() => {}} text="update" />
    <BackupButton onClick={() => {}} text="remove" />
    <BackupButton onClick={() => {}} text="reservation" />
    <BackupButton onClick={() => {}} text="cancel" />
    <BackupButton onClick={() => {}} text="close" />
  </>
);
