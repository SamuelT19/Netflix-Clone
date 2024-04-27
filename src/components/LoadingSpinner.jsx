import React from 'react'
import { SyncLoader } from 'react-spinners';


function LoadingSpinner() {
    return (
      <>
        <SyncLoader
          color="red"
          margin={9}
          size={20}
          cssOverride={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10vh",
          }}
        />
      </>
    );
}

export default LoadingSpinner