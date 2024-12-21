// pages/api/fetchTransactions.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { Client, Databases } from 'node-appwrite';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

      const databases = new Databases(client);

      const response = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_ID!,
        process.env.APPWRITE_USER_COLLECTION_ID!
      );

      const transactions = response.documents.map((doc: any) => ({
        $id: doc.$id,
        id: doc.id,
        name: doc.name,
        paymentChannel: doc.paymentChannel,
        type: doc.type,
        accountId: doc.accountId,
        amount: doc.amount,
        pending: doc.pending,
        category: doc.category,
        date: doc.date,
        image: doc.image,
        $createdAt: doc.$createdAt,
        channel: doc.channel,
        senderBankId: doc.senderBankId,
        receiverBankId: doc.receiverBankId,
      }));

      res.status(200).json({ transactions });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch transactions' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
