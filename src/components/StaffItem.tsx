import { IStaff } from "../types/staffmovie";

export const StaffItem = ({
  staffId,
  nameRu,
  posterUrl,
  professionKey,
}: IStaff) => {
  return (
    <div className="flex flex-col gap-2 font-exo" key={staffId}>
        <img className="rounded-2xl " src={posterUrl} alt="card" />
        <p className="text-base font-bold text-white">{nameRu}</p>
        <p className="text-base font-bold text-white">{professionKey}</p>
    </div>
  );
};
