import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ControlledInput, FocusAwareStatusBar, Text, View } from '@/ui';
const schema = z.object({
  input: z.string().min(1),
});

type FormType = z.infer<typeof schema>;

export const Chat = () => {
  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      <View>
        <Text> Hello, ChatOnce </Text>
      </View>
      <View className="flex-1 px-2 py-4">
        <ControlledInput name="input" control={control} multiline onSubmitEditing={onSubmit} />
      </View>
    </View>
  );
};
