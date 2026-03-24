import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  type Unsubscribe,
} from "firebase/firestore";
import { db } from "./firebase";

export type TripStatus =
  | "COMPLETADO"
  | "CANCELADO"
  | "SOLICITADO"
  | "EN_PROGRESO";

export interface Trip {
  id: string;
  status: TripStatus;
  driverId: string;
  passengerId?: string;
  passengerName: string;
  coordinates: string;
  address: string;
  time: string;
  price: string;
}

function formatTimeLabel(isoOrMillis: unknown): string {
  if (isoOrMillis == null) return "";
  if (typeof isoOrMillis === "object" && isoOrMillis !== null && "toDate" in isoOrMillis) {
    const d = (isoOrMillis as { toDate: () => Date }).toDate();
    return d.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });
  }
  if (typeof isoOrMillis === "string") {
    const d = new Date(isoOrMillis);
    return Number.isNaN(d.getTime()) ? isoOrMillis : d.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });
  }
  return String(isoOrMillis);
}

export function subscribeDriverTrips(
  driverId: string,
  onData: (trips: Trip[]) => void,
  onError?: (err: Error) => void
): Unsubscribe {
  const q = query(
    collection(db, "trips"),
    where("driverId", "==", driverId),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(
    q,
    (snap) => {
      const trips: Trip[] = snap.docs.map((docSnap) => {
        const d = docSnap.data();
        return {
          id: docSnap.id,
          status: (d.status as TripStatus) ?? "SOLICITADO",
          driverId: String(d.driverId ?? ""),
          passengerId: d.passengerId ? String(d.passengerId) : undefined,
          passengerName: String(d.passengerName ?? "Pasajero"),
          coordinates: String(d.coordinates ?? ""),
          address: String(d.address ?? ""),
          time: d.time ? String(d.time) : formatTimeLabel(d.createdAt),
          price: String(d.price ?? ""),
        };
      });
      onData(trips);
    },
    (err) => {
      onError?.(err);
    }
  );
}
