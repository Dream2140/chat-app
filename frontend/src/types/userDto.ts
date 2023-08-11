export interface UserDto {
    _id: string;
    nickname: string;
    avatarLetter?: string;
    avatarPath?: string;
    isOnline: boolean;
}