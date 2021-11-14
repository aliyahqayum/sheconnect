import React, { Component } from "react";
import EditProfilePictures from "../profileEdit/EditProfilePictures";
import { Modal } from "react-materialize";

class ModalUserEditProfilePictures extends Component {
  render() {
    return (
      <div>
        <Modal
          id="edit-pictures-modal"
          className="modals"
          header="Edit your profile pictures"
          fixedFooter
          trigger={false}
        >
          <p className="modal-intro">
            Add a profile picture!
          </p>
          <EditProfilePictures />
        </Modal>
      </div>
    );
  }
}

export default ModalUserEditProfilePictures;
