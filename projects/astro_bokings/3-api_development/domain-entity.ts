import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import {
  BookingStatus,
  InvoiceStatus,
  InvoiceType,
  LaunchStatus,
  PaymentMethod,
} from "./domain.dto";

@Entity("suppliers")
export class Supplier {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "company_name", type: "text" })
  companyName: string;

  @Column({ name: "legal_number", type: "text" })
  legalNumber: string;

  @Column({ name: "legal_address", type: "text" })
  legalAddress: string;

  @OneToMany(() => Rocket, (rocket) => rocket.supplier)
  rockets: Rocket[];

  @OneToMany(() => Launch, (launch) => launch.supplier)
  launches: Launch[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity("rockets")
export class Rocket {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text", nullable: true })
  specifications: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.rockets)
  supplier: Supplier;

  @Column({ name: "supplier_id", type: "uuid" })
  supplierId: string;

  @OneToMany(() => Launch, (launch) => launch.rocket)
  launches: Launch[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity("launches")
@Index("idx_launches_supplier_id", ["supplierId"])
@Index("idx_launches_launch_date", ["launchDate"])
export class Launch {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Rocket, (rocket) => rocket.launches)
  rocket: Rocket;

  @Column({ name: "rocket_id", type: "uuid" })
  rocketId: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.launches)
  supplier: Supplier;

  @Column({ name: "supplier_id", type: "uuid" })
  supplierId: string;

  @Column({ name: "launch_date", type: "timestamptz" })
  launchDate: Date;

  @Column({ type: "text" })
  destination: string;

  @Column({ type: "integer" })
  capacity: number;

  @Column({ name: "price_per_seat", type: "decimal", precision: 10, scale: 2 })
  pricePerSeat: number;

  @Column({ type: "enum", enum: LaunchStatus })
  status: LaunchStatus;

  @OneToMany(() => Booking, (booking) => booking.launch)
  bookings: Booking[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity("bookings")
@Index("idx_bookings_customer_id", ["customerId"])
@Index("idx_bookings_launch_id", ["launchId"])
@Check("number_of_seats > 0 AND number_of_seats <= 6")
export class Booking {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "customer_id", type: "uuid" })
  customerId: string;

  @ManyToOne(() => Launch, (launch) => launch.bookings)
  launch: Launch;

  @Column({ name: "launch_id", type: "uuid" })
  launchId: string;

  @Column({ name: "number_of_seats", type: "integer" })
  numberOfSeats: number;

  @Column({ type: "enum", enum: BookingStatus })
  status: BookingStatus;

  @Column({ name: "total_amount", type: "decimal", precision: 10, scale: 2 })
  totalAmount: number;

  @OneToMany(() => Passenger, (passenger) => passenger.booking)
  passengers: Passenger[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity("passengers")
@Index("idx_passengers_booking_id", ["bookingId"])
@Check(
  "date_of_birth <= CURRENT_DATE - INTERVAL '18 years' AND date_of_birth >= CURRENT_DATE - INTERVAL '70 years'"
)
export class Passenger {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Booking, (booking) => booking.passengers)
  booking: Booking;

  @Column({ name: "booking_id", type: "uuid" })
  bookingId: string;

  @Column({ name: "first_name", type: "text" })
  firstName: string;

  @Column({ name: "last_name", type: "text" })
  lastName: string;

  @Column({ name: "date_of_birth", type: "date" })
  dateOfBirth: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity("invoices")
@Index("idx_invoices_booking_id", ["bookingId"])
@Index("idx_invoices_launch_id", ["launchId"])
export class Invoice {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "booking_id", type: "uuid", nullable: true })
  bookingId: string | null;

  @Column({ name: "launch_id", type: "uuid", nullable: true })
  launchId: string | null;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  amount: number;

  @Column({ type: "enum", enum: InvoiceStatus })
  status: InvoiceStatus;

  @Column({ name: "issue_date", type: "timestamptz" })
  issueDate: Date;

  @Column({ type: "enum", enum: InvoiceType })
  type: InvoiceType;

  @OneToMany(() => PaymentRecord, (paymentRecord) => paymentRecord.invoice)
  paymentRecords: PaymentRecord[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity("payment_records")
@Index("idx_payment_records_invoice_id", ["invoiceId"])
export class PaymentRecord {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Invoice, (invoice) => invoice.paymentRecords)
  invoice: Invoice;

  @Column({ name: "invoice_id", type: "uuid" })
  invoiceId: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  amount: number;

  @Column({ name: "payment_date", type: "timestamptz" })
  paymentDate: Date;

  @Column({ type: "enum", enum: PaymentMethod })
  paymentMethod: PaymentMethod;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
