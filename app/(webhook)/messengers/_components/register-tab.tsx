"use client";

import { postFetchEnc, postFetchMessenger } from "@/apis/messenger";
import DeliverButton from "@/components/common/button";
import DeliverInput from "@/components/common/input";
import { MESSENGER_TYPES } from "@/constants/register/messenger-type";
import { getSessionStorage } from "@/utils/storage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterTab = () => {
    const router = useRouter();
    const { control, handleSubmit, register } = useForm();
    const [selectedMessengerType, setSelectedMessengerType] = useState("");
    const repositoryId = Number(getSessionStorage("repositoryId"));

    const onMessengerTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSelectedMessengerType(value);
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const { messengerType, webhookUrl } = data;

        const response = await postFetchMessenger({
            repositoryId,
            messengerType,
            webhookUrl,
        });
        if (response.status === "Success") {
            const fetchEnc = async () => {
                const responseMessenger = await postFetchEnc(
                    response.data.encryptedWebhookUrl
                );
                if (responseMessenger.status === 200) {
                    alert(
                        "메신저 활성화에 성공했습니다. 메인 페이지로 이동합니다."
                    );
                    router.push("/");
                }
            };
            fetchEnc();
        }
    };

    return (
        <div className="min-h-[648px] flex-justify">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* select messenger type */}
                <div className="mt-[100px] mb-7">
                    <h3 className="w-full mb-3 font-medium text-SYSTEM-black text-sm">
                        메신저 타입 선택
                    </h3>
                    <div className="flex items-center space-x-6">
                        {MESSENGER_TYPES.map((type) => (
                            <label
                                key={type.value}
                                className="flex items-center"
                            >
                                <input
                                    type="radio"
                                    value={type.value}
                                    {...register("messengerType", {
                                        required: true,
                                        onChange: onMessengerTypeChange,
                                    })}
                                    className={`mr-2 border ${
                                        selectedMessengerType === type.value
                                            ? "border-BRAND-50 border-[6px]"
                                            : "border-GREY-20"
                                    }`}
                                    style={{
                                        appearance: "none", // 기본 스타일 숨기기
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <p className="text-[13px] font-medium">
                                    {type.label}
                                </p>
                            </label>
                        ))}
                    </div>
                </div>
                {/* webhook url */}
                <div className="mb-10">
                    <DeliverInput
                        name="webhookUrl"
                        control={control}
                        title="웹훅 URL 입력"
                        placeholder="ex) https://discord.com/api/webhooks/12745805631387/s-AC"
                    />
                </div>
                <DeliverButton
                    label="등록하기"
                    length="full"
                    onClick={handleSubmit(onSubmit)}
                    isModal={false}
                />
            </form>
        </div>
    );
};
export default RegisterTab;
