import { Component } from '@angular/core';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";
import { NewTicketComponent } from './new-ticket/new-ticket.component';


@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: {title: string, text: string}) {
   const ticket: Ticket = {
   title: ticketData.title,
   request: ticketData.text,
   id: Math.random().toString(),
   status: 'open'
  }
  this.tickets.push(ticket);
  }

  onClosedTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if(ticket.id === id) {
        return {...ticket, status: 'closed'}
      }
      return ticket;
    });

  }
}
