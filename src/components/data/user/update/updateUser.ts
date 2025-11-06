import type { User } from "@/components/data/user/type";
// import { snackbar, alert } from "mdui";
// import { markDialogOpen, markDialogClosed } from "@/components/app/router.vue";
// @ts-ignore
import UpdateUserWorker from "./updateUser.worker.ts?worker&inline";

const updateUserWorker = new UpdateUserWorker();

const pendingUsers: { [key: string]: User } = {};

export function updateUserWithWorker(user: User, updateItem: boolean = false) {
    // 检查并生成 uid
    if (!user.uid) {
        user.uid = `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
    }
    const plainUser: User = JSON.parse(JSON.stringify(user));

    pendingUsers[user.uid] = user;
    updateUserWorker.postMessage({ type: "updateUser", user: plainUser, updateItem });
}

export function checkLoginWithWorker(user: User) {
    const plainUser: User = JSON.parse(JSON.stringify(user));

    updateUserWorker.postMessage({ type: "checkLogin", user: plainUser, updateItem: false });
}

export function previewRivalsWithWorker(user: User) {
    const plainUser: User = JSON.parse(JSON.stringify(user));

    updateUserWorker.postMessage({ type: "previewRivals", user: plainUser });
}

export function clearIllegalTicketsWithWorker(user: User) {
    const plainUser: User = JSON.parse(JSON.stringify(user));

    updateUserWorker.postMessage({ type: "clearIllegalTickets", user: plainUser });
}
export function previewStockedTicketsWithWorker(user: User) {
    const plainUser: User = JSON.parse(JSON.stringify(user));

    updateUserWorker.postMessage({ type: "previewStockedTickets", user: plainUser });
}
