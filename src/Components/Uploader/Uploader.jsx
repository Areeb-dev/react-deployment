import React from 'react'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import { useState } from 'react'
import axios from 'axios'
import { AUTH } from '../../utils/apis'
import { errorMessage, successMessage } from '../../utils/helpers'
import { AddUser } from '../../Redux/actions/authActions'
import { useDispatch } from 'react-redux'

const Uploader = ({ user }) => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const onChange = ({ fileList: newFileList }) => {
        if (newFileList?.length) {
            setLoading(true)
            let obj = new FormData()
            obj.append('userId', user?._id)

            if (newFileList[0]?.originFileObj) {
                let file = newFileList.pop()
                obj.append('file', file?.originFileObj)
            }
            axios.post(AUTH?.UPDATEUSER, obj)
                .then((res) => {
                    const { data } = res
                    if (data?.success) {
                        successMessage(
                            ' Profile Updated Successfully'
                        )
                        dispatch(AddUser(data?.user))
                    }
                    else {
                        errorMessage(data?.message)
                    }
                    setLoading(false)
                })
                .catch((e) => {
                    setLoading(false)
                    console.log(e)
                })
        }
    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    )
    return (
        <>
            {
                loading ?
                    <div className=''>
                        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                    : <Upload
                        name="avatar"
                        // listType="picture-circle"
                        className="avatar-uploader"
                        listType="picture-card"
                        showUploadList={false}
                        // fileList={fileList}
                        beforeUpload={() => false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        onChange={onChange}
                        multiple={false}
                        accept='image/png, image/jpeg'
                    >
                        {user?.imageUrl ? (
                            <img
                                src={user?.imageUrl}
                                alt="avatar"
                                style={{
                                    width: '30%',
                                }}
                            />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
            }
        </>
    )
}
export default Uploader