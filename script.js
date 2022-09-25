function showModal() {
   swal("Registration", "Registration completed", "success", {
                buttons: {
                    cancel: false,
 
                    New: {
                        text: "Got it",
                        visible: true,
                        className: "modal-button",
                    },
                },
            });
}