import { Modal, List, Frame, Button } from '@react95/core'
import { Mmsys113, Mshtml32534 } from '@react95/icons'
import React from 'react'

type Props = {}

function ScreenContent({ }: Props) {
  console.log("rerender")
  const [showFirstModal, toggleShowFirstModal] = React.useState(false);
  const [showSecondModal, toggleShowSecondModal] = React.useState(false);
  const handleOpenBothModals = () => {
    toggleShowFirstModal(true);
    toggleShowSecondModal(true);
  };
  const handleOpenFirstModal = () => toggleShowFirstModal(true);
  const handleOpenSecondModal = () => toggleShowSecondModal(true);
  const handleCloseFirstModal = () => toggleShowFirstModal(false);
  const handleCloseSecondModal = () => toggleShowSecondModal(false);
  const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) => alert(e.currentTarget.value);
  return <>
      <Button onClick={handleOpenBothModals}>Trigger Both</Button>
      <Button onClick={handleOpenFirstModal}>Trigger 1st</Button>
      <Button onClick={handleOpenSecondModal}>Trigger 2nd</Button>
      {showFirstModal && <Modal width="300px" height="200px" icon={<Mmsys113 variant="32x32_4" />} title="First Modal" defaultPosition={{
      x: 0,
      y: 20
    }} onClose={handleCloseFirstModal} buttons={[{
      value: 'Ok',
      onClick: handleButtonClick
    }, {
      value: 'Cancel',
      onClick: handleButtonClick
    }]} menu={[{
      name: 'File',
      list: <List width="200px">
                  <List.Item onClick={handleCloseFirstModal}>Exit</List.Item>
                </List>
    }, {
      name: 'Edit',
      list: <List width="200px">
                  <List.Item>Copy</List.Item>
                </List>
    }]}>
          <Frame bg="white" boxShadow="$in" h="100%" w="100%" padding="0px 5px">
            <p>
              The active modal will be based on the order they render, most
              recently rendered will be the active component. On click of a
              non-active modal will fire an action to set that modal as the
              active one.
            </p>
          </Frame>
        </Modal>}
      {showSecondModal && <Modal width="300px" height="200px" icon={<Mshtml32534 variant="32x32_4" />} title="Second Modal" defaultPosition={{
      x: 250,
      y: 100
    }} onClose={handleCloseSecondModal} buttons={[{
      value: 'Ok',
      onClick: handleButtonClick
    }, {
      value: 'Cancel',
      onClick: handleButtonClick
    }]} menu={[{
      name: 'File',
      list: <List width="200px">
                  <List.Item onClick={handleCloseSecondModal}>Exit</List.Item>
                </List>
    }, {
      name: 'Edit',
      list: <List width="200px">
                  <List.Item>Copy</List.Item>
                </List>
    }]}>
          <Frame bg="white" boxShadow="$in" h="100%" w="100%" padding="0px 5px">
            <p>
              Try playing with the modals. See which on is active, click and
              drag them. Understand their behavior.
            </p>
          </Frame>
        </Modal>}
    </>;
}

export default ScreenContent